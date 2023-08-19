import './button.css'

function ButtonIn({onClick,isSignUp}){
    const ButtonText = isSignUp ? 'Sign Up' : 'Sign In';
    const SwitchText = isSignUp ? 'Sign In' : 'Sign Up';
    const pText = isSignUp ? "Do have account?" : "Don't have account?";
    return (
        <div className='buttonDiv'>
            <button>{ButtonText}</button>
            <p>{pText} <span onClick={onClick}>{SwitchText}</span></p>
        </div>
    )
}

export default ButtonIn;