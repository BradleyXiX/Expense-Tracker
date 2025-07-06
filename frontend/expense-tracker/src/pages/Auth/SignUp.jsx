import { useState } from 'react';
import AuthLayout from '../../components/layouts/AuthLayout'
import { useNavigate, Link } from 'react-router-dom';
import Input from '../../components/Inputs/Input';
import ProfilePhotoSelector from '../../components/Inputs/ProfilePhotoSelector';
import { validateEmail } from '../../utils/helper';

const SignUp = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  //Handle Sign Up Form
  const handleSignUp = async () => { 
    email.preventDefault();

    let profileImageUrl = "";

    if (!fullName) {
      setError("Please enter your name.");
      return;
    }

    if(!validateEmail(email)) {
      setError("Please enter a valid email address.")
      return
    }

    if (!password) {
      setError("Please enter a password");
      return;
    }

    setError("")

    //Sign Up API Call
  };

  return (
    <AuthLayout>
      <div className='lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center'>
        <h3 className='text-2xl font-semibold text-black'>Create an Account</h3>
        <p className='text-sm text-slate-700 mt-[5px] mb-6 ' >
          Join us by entering your details below.
        </p>

        <form onSubmit={handleSignUp}>

          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Input
              value={fullName}
              onChange={({ target }) => setFullName(target.value)}
              label="Full Name"
              placeholder="eg. Bradley Chiwo"
              type='text'
            />

            <Input
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              label="Email Address"
              placeholder="john@example.com"
              type="text"
            />
            <div className='col-span-2'>
              <Input
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                label="Password"
                placeholder="Min 8 Characters"
                type="password"
              />
            </div>

            {error && <p className='text-red-500 text-xs pb-2.5 '>{error}</p>}
            <div className='col-span-2'>
              <button type='submit' className='btn-primary'>
                SIGN UP
              </button>
            </div>


            <p className='text-[14px] text-slate-800 mt-3 '>
              Already have an acccout?{""}
              <Link className='font-medium text-primary underline' to='/login'>
                Login
              </Link>
            </p>

          </div>
        </form>
      </div>
    </AuthLayout>
  )
}

export default SignUp