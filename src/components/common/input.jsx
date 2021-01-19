const Input = ({ name, label, error, ...rest }) => {
    return (
      <div className="form-group">
        <label className="form-control-label" htmlFor={name}>
          {label}
        </label>
        <input {...rest} name={name} id={name} className="form-control" />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    );
  };
  
  export default Input;