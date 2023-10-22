import React,{useEffect ,useRef,useState} from 'react'
import './header.css'
import headerLogo from 'assets/images/logo.png'
import { Button ,Modal } from 'components/ui'
import BudgetForm from 'components/budget/BudgetForm/BudgetForm'

const Header = () => {
  const isMount = useRef( false );
    const [scrolled, setScrolled] = useState( false );
    const [modal, setModal] = useState( false );
  useEffect( () => {
    if ( !isMount.current ) {
                
      if ( window.scrollY > 60 ) {
        setScrolled( true );
      }
      window.addEventListener( 'scroll', () => {
        if ( window.scrollY > 60 ) {
          setScrolled( true );
        } else {
          setScrolled( false );
        }
      } )
      isMount.current = true;
    }
  }, [] );
  return (
    <header className={`header ${scrolled&&'scrolled'}`}>
      <div class="container">
        <div className='header_row'>
          {/* Brand  */}
          <div className='logo'>
            <img src={headerLogo} alt="header Logo" />
          </div>
          <h1>Buddget App</h1>
          {/* Actions */}
          <div className='header_actions'>
            <div className='header_action_add' onClick={()=>{setModal(true)}}>
              <Button>+</Button>
            </div>
          </div>
        </div>
      </div>
      <Modal visible={modal} closeModal={()=>{setModal(false)}}>
        <div>
          <BudgetForm closeModal={()=>{setModal(false)}}/>
        </div>
      </Modal>
    </header>
    
  )
}

export default Header