
import './Notification.css';

const Notification = (props) => {
//   let specialClasses = '';

//   if (props.status === 'error') {
//     specialClasses = classes.error;
//   }
//   if (props.status === 'success') {
//     specialClasses = classes.success;
//   }

//   const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <>
        {props.status === 'error' && (<section className='notification error'>
            <h2>{props.title}</h2>
            <p>{props.message}</p>
        </section>)}
        {props.status === 'success' && (<section className='notification success'>
            <h2>{props.title}</h2>
            <p>{props.message}</p>
        </section>)}
    </>
  );
};

export default Notification;
