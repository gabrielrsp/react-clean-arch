//Entry point da aplicação
import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@/presentation/components'
import '@/presentation/styles/global.scss'

//ENTRY POINT FOR PRESENTATION VIEW
ReactDOM.render( 
  <Router />,
  document.getElementById('main')
)
