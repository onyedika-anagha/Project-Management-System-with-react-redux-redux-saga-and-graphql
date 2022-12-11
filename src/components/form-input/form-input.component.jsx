function FormInput({ label, ...otherProps }) {
  return (
    <div className="mb-2">
      <label className="form-label" style={{ width: "100%" }}>
        {label}
      </label>
      <input {...otherProps} />
    </div>
  );
}

export default FormInput;
