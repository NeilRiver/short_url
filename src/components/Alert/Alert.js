import Alert from '@mui/material/Alert';
import { useRef} from 'react';
import { useSelector } from 'react-redux'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function AlertPopUp(prop) {
    const notify = useSelector(state => state.app.notify)
    const nodeRef = useRef(null)
    return (
        <TransitionGroup className="todo-list">
            {notify.map((item) => (
                <CSSTransition
                    key={item.id}
                    timeout={4000}
                    classNames="item"
                    // nodeRef={nodeRef}   
                >
                    {/* <Alert ref={nodeRef} severity={item.severity}>{item.text}</Alert> */}
                    <Alert Col sx ={{border: 1, mb:1}} ref={nodeRef} severity={item.severity}>{item.text}</Alert>
                </CSSTransition>
            ))}
        </TransitionGroup>
    );
}