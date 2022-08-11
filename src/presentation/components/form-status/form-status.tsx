import React, { useState, useContext } from 'react'
import { Spinner } from '../spinner/spinner'
import Styles from './form-status-styles.scss'
import { FormContext } from '@/presentation/contexts/form/form-context'

export const FormStatus: React.FC = () => {
  const { state, errorState } = useContext(FormContext)
  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}> 
      { state.isLoading && <Spinner className={Styles.spinner} /> }
      { errorState.main && <span className={Styles.error}>{errorState.main}</span> }
    </div>
  )
}

