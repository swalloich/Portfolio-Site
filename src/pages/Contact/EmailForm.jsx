import useWeb3forms from "@web3forms/react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Row } from "../../components"

export default function EmailForm({ ...props }) {
  const { register, reset, handleSubmit } = useForm()
  const [isSent, setIsSent] = useState(false)
  const [isError, setIsError] = useState(false)
  const [result, setResult] = useState(null)

  const accessKey = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY
  const baseEmailSubject = "Message from portfolio site"

  const { submit: onSubmit } = useWeb3forms({
    access_key: accessKey,
    settings: {
      from_name: "Jacob Nelson's Portfolio Site",
      subject: baseEmailSubject,
    },
    onSuccess: (msg) => {
      setIsSent(true)
      setResult(msg)
    },
    onError: (msg) => {
      setIsSent(true)
      setIsError(true)
      setResult(msg)
    }
  })

  const resetForm = () => {
    reset()
    setIsSent(false)
    setIsError(false)
    setResult(null)
  }

  if (isError) {
    return (
      <div {...props}>
        <h2 className="text-center mt-5">{result}</h2>
        <Row className="mt-3" justify="center">
          <button className="btn btn-primary" onClick={resetForm}>Try again</button>
        </Row>
      </div>
    )
  }
  if (isSent && !isError) {
    return (
      <div {...props}>
        <h2 className="text-center mt-5">{result}</h2>
        <Row className="mt-3" justify="center">
          <button className="btn btn-primary" onClick={resetForm}>Send another</button>
        </Row>
      </div>
    )
  }
  return (
    <div {...props}>
      <h2>Send me an Email!</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
        <input className="mt-3" type="text" {...register("name", { required: true })} placeholder="Name" />
        <input className="mt-3" type="email" {...register("email", { required: true })} placeholder="Email" />
        <textarea className="mt-3" {...register("message", { required: true })} placeholder="Message" />
        <Row className="mt-3">
          <button className="btn btn-primary" type="submit">Send</button>
        </Row>
      </form>
    </div>
  )
}