/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {   
             
        // Añado evento para que cuando se pulse el botón Tomar Foto del index.html, llame al metodo onDeviceReady  
        document.getElementById("take-picture-button").addEventListener("click",this.onDeviceReady.bind(this),false);
    },   
   
    // Este metodo abre la camara del movil y almacena la imagen en memoria
    onDeviceReady: function() {

        navigator.camera.getPicture(this.onSuccess, this.onFail,{
            destinationType: Camera.DestinationType.FILE_URI,
            quality: 100,
            correctOrientation: true,
            // Funcion para dispositivos IOS para especificar la ubicación del elemento de anclaje y la dirección de la flecha del popover utilizado en el iPad al seleccionar imágenes de la biblioteca o álbum.
            popoverOptions: new CameraPopoverOptions(50, 50, 25, 25, Camera.PopoverArrowDirection.ARROW_ANY)
        });
    },

    // Si todo es correcto agrega la imagen al index.html en un div
    onSuccess: function(imageURI) { 
        var image = document.getElementById('myImage');
        image.src = imageURI;
    }, 
    // Si falla envia un mensaje
    onFail: function(message) { 
        alert('Failed because: ' + message); 
   }

};

app.initialize();