import { formReducer } from './../../utils/reducers'
import React, { forwardRef, useReducer, useRef, useState } from 'react'
import styles from '../../styles/message/message.module.scss'
import { MessageSquare, AtSign, User } from 'react-feather'
import emailjs from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha'
import toast from 'react-hot-toast'
import { useConfetti } from 'lib/useConfetti'
import ConfettiCanvas from '../ConfettiCanvas'

const MessageComponent = (props: any, ref: any) => {
  const [{ name, email, message }, dispatch] = useReducer(formReducer, {
    name: '',
    email: '',
    message: '',
  })

  const refCaptcha = useRef<ReCAPTCHA>(null)
  // console.log('refCaptcha ', refCaptcha)

  const setFormName = (e: React.ChangeEvent<HTMLInputElement>) => dispatch({ type: 'name', value: e.target.value })
  const setFormEmail = (e: React.ChangeEvent<HTMLInputElement>) => dispatch({ type: 'email', value: e.target.value })
  const setFormMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => dispatch({ type: 'message', value: e.target.value })
  const resetForm = () => dispatch({ type: 'reset', value: '' })

  const { getInstance, fire } = useConfetti()

  const [isSuccess, setIsSuccess] = useState(false)

  const submitHandler = async (e: any) => {
    e.preventDefault()
    // @ts-ignore
    // const token = await refCaptcha.current.executeAsync()
    const token = refCaptcha.current.getValue()
    // console.log('token', token)
    const re =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|in|au|af|ca|fr|jp|mx|ru|sy|uk|ae|ch|co|tech|finance|financial|al|k12|jobs|museum|edu|eu|xyz|io|me|tv)\b/

    if (!name || !message) {
      toast.error('Fields cannot be empty')
      return
    }

    if (!re.test(email)) {
      toast.error('Please provide a valid email id')
      return
    }

    const Params = {
      to_name: 'Sai Shanmukh',
      from_name: name,
      from_mail: email,
      message,
      'g-recaptcha-response': token,
    }

    if (!token) {
      toast.error('reCaptcha failed')
      return
    }

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        Params,
        process.env.NEXT_PUBLIC_EMAILJS_PRIVATE_KEY as string,
      )
      .then(
        () => {
          toast.success('Message Sent Successfully', {
            id: 'message',
            duration: 3000,
          })
          // @ts-ignore
          refCaptcha.current.reset()
          setIsSuccess(true)
          fire()
          resetForm()
        },
        err => {
          toast.error('Something went wrong', {
            duration: 3000,
          })
        },
      )
    return
  }

  const messageRef = useRef(null)

  React.useImperativeHandle(ref, () => {
    return {
      // @ts-ignore
      scrollIntoView: () => messageRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' }),
    }
  })

  return (
    <div className={styles.messageComponent} ref={messageRef}>
      <div className={styles.messageContainer}>
        <div className={styles.headingContainer}>
          <h2 className={styles.messageHeading}>Get in touch</h2>
        </div>

        <div className={styles.formContainer}>
          <form>
            <div className={styles.inputWrapper}>
              <input type="text" value={name} onChange={e => setFormName(e)} placeholder={'Name'} className={styles.input} required />
              <User className={styles.inputIcon} />
            </div>

            <div className={styles.inputWrapper}>
              <input type="email" value={email} onChange={e => setFormEmail(e)} placeholder={'email'} className={styles.input} required />
              <AtSign className={styles.inputIcon} />
            </div>

            <div className={styles.inputWrapper}>
              <textarea
                value={message}
                onChange={e => setFormMessage(e)}
                placeholder={'Message'}
                className={styles.input}
                rows={4}
                required
              />
              <MessageSquare className={styles.inputIcon2} />
            </div>

            <div className={styles.reInputWrapper}>
              <ReCAPTCHA ref={refCaptcha} theme="light" sitekey={process.env.NEXT_PUBLIC_SITE_KEY as string} />
            </div>
            <ConfettiCanvas getInstance={getInstance} />

            <div className={styles.headingContainer}>
              <a onClick={e => submitHandler(e)} className={styles.sendMessage}>
                Send Message
              </a>
            </div>
            {isSuccess && (
              <div className={styles.confettiText} onClick={() => fire()}>
                🎉 Give more confetti !
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default forwardRef(MessageComponent)
