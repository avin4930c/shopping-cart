import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { Link } from 'react-router-dom';


const ToastComp = ({show, setShow} : {show: boolean, setShow: Function}) => {

    return (
        <ToastContainer position="bottom-start" className="p-3">
            <Toast onClose={() => setShow(false)} show={show} delay={3000} className='bg-warning' autohide>
                <Toast.Body>
                    Login to add Items. <Link to='/profile' className='toast-link text-decoration-underline'>Profile</Link>
                </Toast.Body>
            </Toast>
        </ToastContainer>
    )
}

export default ToastComp