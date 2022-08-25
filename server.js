const express = require('express')

const app = express()

app
  .listen( process.env.PORT||3000, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Tudo funcionando');
    }
  } )