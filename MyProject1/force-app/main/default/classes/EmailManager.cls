public class EmailManager {
    
    public void sendMail(String address, String subject, String body) {
        
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        String[] toAddresses = new String[] {address};
        mail.setToAddresses(toAddresses);
        mail.setSubject(subject);
        mail.setPlainTextBody(body);
       

 list<Messaging.SingleEmailMessage> mails=new list<Messaging.SingleEmailMessage>(); 
            mails.add(mail);
        Messaging.sendEmail(mails);
    }

}