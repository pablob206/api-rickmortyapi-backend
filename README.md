## Rutas de prueba:
```
localhost:3000/api/character/
localhost:3000/api/character/?name=rick
localhost:3000/api/character/?status=alive
localhost:3000/api/character/?species=human
localhost:3000/api/character/?gender=female
```

## Respectivos resultados en directorio ```postman```.

-------------------------------------------------------------------------------------------------
## Característica de encriptación:
Ahora los archivos JSON se envian al frontEnd encriptados, se pueden desencriptar con la KEY (en el backend, la key esta almacenada en el .env). Lo ideal en este caso es enviarle la KEY al cliente por fuera de la via del endpoint, es una estrategia usada por grandes companias como mercadolibre, binance, inumerables bancos, por ejemplo se la puede enviar por SMS, whatsapp, correo electronico, etc.

En el archivo utils.js se encuentra la funcion de desencriptado que puede usar el frontEnd.

-------------------------------------------------------------------------------------------------

## Nota: 
De los dos puntos obligatorios fue completado uno. 
Si bien se da por finalizado el test, para el punto del download se iba a usar ```https://www.npmjs.com/package/zip-downloader```, pero no hubo tiempo, de todas maneras se completara en el transcurso de la semana solo con fines de practica.
