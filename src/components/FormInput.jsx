function FormInput({ name, type, label, defaultValue, size }) {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text capitalize">{label}</span>
      </label>

      <input
        placeholder="Type here"
        type={type}
        name={name}
        defaultValue={defaultValue}
        className= {`input input-bordered w-full ${size}`}
      />
    </div>
  );
}

export default FormInput;
