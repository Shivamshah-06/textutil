import React from 'react'

export default function About() {
  return (
    <>
    <div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
</div>
<div className="form-floating">
  <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
  <label for="floatingPassword">Password</label>
</div>
</>
  );
}
