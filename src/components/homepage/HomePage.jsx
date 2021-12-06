const HomePage = ({ history }) => {
    const handleClick = () => {
        history('/Form')
    }

    return (
        <div>
            <h1>
                How much free time do you have?
            </h1>
            <div >
                <button 
                    onClick={handleClick}
                    style={{
                        background:'orange',
                        width:'190px',
                        height:'70px',
                        borderRadius:'18px',
                        fontSize:'30px',
                        fontWeight:'bold',
                        color:'white',
                        cursor:'pointer'
                    }}
                >
                    find out
                </button>
            </div>
        </div>
    )
}

export default HomePage