import './Button.css';

export default function Button ({icon:Icon,children}){
    return (
        <>            
            <button className='button'>
            {Icon && <Icon className="button-icon" />}
                <span>{children}</span>
            </button>
        </>

    );
}