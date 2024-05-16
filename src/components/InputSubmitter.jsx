export const InputSubmitter = ({formSubmit, wordSearched}) => {
    return (
        <form className="form-submitter" onSubmit={formSubmit}>
            <input className="input-submitter" onChange={wordSearched}></input>
        </form>
    )

}