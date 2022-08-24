import { useState, useEffect } from "react";
import {FaUser} from "react-icons/fa"

export const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: ""
    })

  return (
    <div>Register</div>
  )
}
