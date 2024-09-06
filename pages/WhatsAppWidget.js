import { useEffect } from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp'


function WhatsAppWidget (){

    return(
       <FloatingWhatsApp 
       phoneNumber="917607268008"
       accountName="Sabzi.com"
       statusMessage="Typically replies within 15 minutes"
       allowEsc
       allowClickAway
       notification
       notificationSound/>
    );
}

export default WhatsAppWidget;
