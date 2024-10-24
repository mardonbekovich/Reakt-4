
import './Footer.css';
const Footer = () => {
  return (
    <>
      <div className="section">
        <div className="container">
         
           
            <div className="searche">
               <h1>Форма заказа билета в будущее</h1>
              <form action="#" className='forma'>
              <input type="name" name='name' placeholder='Имя'/>
               <input type="email" name='email' placeholder='E-mail'/>
              <input type="numbers" name='phone' placeholder='Телефон'/>
              <input type="travel" name='travel' placeholder='Куда я полечу в ближайшее время?'/> 
             </form>
            </div> 
            <button>go the dreams</button>
         
        </div>
      </div>

      <footer className='footer'>
<div className="container">
  <h1>© Все мои мечты защищены моим трудолюбием</h1>
</div>
      </footer>
    </>
  );
};

export default Footer;
