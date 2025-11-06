const Input = ({ name, label, type, handleInput, value }) => {
  return (
    <div className="mb-3 p-2">
      <label className="block p-1">
        {label}
      </label>
      <input
        className="input w-full"
        type={type}
        name={name}
        onChange={handleInput}
        value={value[name]}
      />
    </div>
  )
}

export default Input
