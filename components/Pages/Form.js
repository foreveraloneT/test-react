import React, { PropTypes } from 'react'
import { Field } from 'redux-form'

const renderInput = (field) => (
  <div>
    <input {...field.input}
      type={field.type}
      placeholder={field.placeholder} />
    {
      field.meta.touched &&
      field.meta.error &&
      <div className='error'>{field.meta.error}</div>
    }
  </div>
)

const renderTextArea = (field) => (
  <div>
    <textarea {...field.input}
      rows={field.rows}
      placeholder={field.placeholder} >
    </textarea>
    {
      field.meta.touched &&
      field.meta.error &&
      <div className='error'>{field.meta.error}</div>
    }
  </div>
)

const PageForm = ({
  submitButtMsg,
  handleSubmit
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className='form'>
      <fieldset>
        <label>Title</label>
        <Field
          name='title'
          component={renderInput}
          type='text'
          placeholder='Enter Title' />
      </fieldset>
      <fieldset>
        <label>Content</label>
        <Field
          name='content'
          component={renderTextArea}
          rows='5'
          placeholder='Enter Content' />
      </fieldset>
      <button
        type='submit'
        className='button'>
        {submitButtMsg}
      </button>
    </form>
  )
}

PageForm.propTypes = {
  submitButtMsg: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default PageForm
