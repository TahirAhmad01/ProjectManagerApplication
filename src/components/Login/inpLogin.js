import React from "react";

function InpLogin({
  name,
  email,
  placeholder,
  className,
  value,
  autoComplete,
  ...rest
}) {
  return (
    <div>
      <label htmlFor="email-address" className="sr-only">
        Email address
      </label>
      <input
        id="email-address"
        name={name}
        type={email}
        autocomplete={autoComplete}
        required
        className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm ${className}`}
        placeholder={placeholder}
        value={value}
        {...rest}
      />
    </div>
  );
}

export default InpLogin;
