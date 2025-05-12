export function Input(props) {
    return (
      <input
        {...props}
        className={`border p-1.5 rounded w-full ${props.className || ''}`}
      />
    );
  }
  