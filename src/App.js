import  { useState } from 'react'; 
import './App.css';


function App() {
	const [submitted, setSubmitted] = useState(false);
	const [firstName, setFirstName] = useState();
	const [lastName, setLastName] = useState();
	const [email, setEmail] = useState();
	const [gender, setGender] = useState();
	const [address, setAddress] = useState();
	const [bio, setBio] = useState();
	const handleSubmit = ev => {
		console.log({firstName}, {lastName}, {email}, {gender}, {address}, {bio})
		ev.preventDefault();
		setSubmitted(true);
		setTimeout(() => {
			setSubmitted(false);
		  }, 4000);
		
    }
  return (
   	<>
      <h1 className="display-5 my-3 text-center">Profile form</h1>
      <form className="w-75  m-auto " onSubmit={handleSubmit}>
        <div className="d-flex flex-column flex-md-row justify-content-between  col-12">
          <label className="py-2 col-12 col-md-6 me-3">
            <input 
            type="text" 
            className="form-control"
            name="firstName" 
            placeholder="First Name" 
            value={firstName}
            onChange={ev => setFirstName(ev.target.value)}
            required/>
          </label>
          <label className="py-2 col-12 col-md-6">
            <input
              type="text" 
            className="form-control" 
            name="lastName" 
            onChange={ev => setLastName(ev.target.value)} 
            value={lastName}
            placeholder="Last Name" required/>
          </label>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between  col-12">
            <label className="py-2 col-12 col-md-6 me-3">
            <input type="email"  className="form-control "
              value={email}
              onChange={ev => setEmail(ev.target.value)} name="email"  placeholder="Email"  required/>
          </label>
          <div className=" py-2 col-12 col-md-6">
            <select value={gender} className="form-select " 
                onChange={ev => setGender(ev.target.value)}>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </div>
        </div>
        <div className=" py-2 d-flex flex-column flex-md-row justify-content-between  col-12">
            <label className="py-2 col-12 col-md-6 me-3">
            <textarea 
            type="text" 
            name="address" 
            value={address} 
            onChange={ev => setAddress(ev.target.value)}
            className="form-control " 
            placeholder="Address" />
          </label>
            <label className="py-2 col-12 col-md-6">
            <textarea className="form-control " name='bio'
            value={bio}
              onChange={ev => setBio(ev.target.value)}  placeholder="Bio" required />
          </label>
        </div>
        <button type="submit" className="btn mb-3 btn-lg btn-outline-success">Submit</button>
      </form>
      {submitted &&
        <p className="my-3 text-center text-success">Your submission has being recorded on the DOM.</p>
      }
	</>
  );
}

export default App;
