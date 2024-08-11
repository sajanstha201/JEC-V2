import React, { useState } from 'react';
import apply from '../images/apply.jfif';
import { Link } from 'react-router-dom';

export default function OnlineApply() {
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    dob: '',
    address: '',
    photo: null,
    course: '',
    ioeRollNo: '',
    ioeRank: '',
    transcript: null,
    migration: null,
    character: null,
    agreement: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.dob) newErrors.dob = 'Date of Birth is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.photo) newErrors.photo = 'Photo is required';
    if (!formData.course) newErrors.course = 'Course selection is required';
    if (!formData.ioeRollNo) newErrors.ioeRollNo = 'IOE Roll Number is required';
    if (!formData.ioeRank) newErrors.ioeRank = 'IOE Rank is required';
    if (!formData.transcript) newErrors.transcript = 'Transcript is required';
    if (!formData.migration) newErrors.migration = 'Migration Certificate is required';
    if (!formData.character) newErrors.character = 'Character Certificate is required';
    if (!formData.agreement) newErrors.agreement = 'You must agree to the declaration';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted successfully', formData);
      // Add form submission logic here
    }
  };
  <label className='block text-lg font-bold mb-2' style={{ fontFamily: "'Merriweather', serif" }}>
  FULL NAME:
  <input
    type='text'
    name='fullName'
    value={formData.fullName}
    onChange={handleChange}
    className={`block w-full border ${errors.fullName ? 'border-red-700' : 'border-blue-700'} rounded-lg px-4 py-2 mt-2`}
    required
  />
  {errors.fullName && <p className='text-red-700'>{errors.fullName}</p>}
</label>


  return (
    <div className='container mx-auto p-6'>
      <div className='text-center mb-12'>
        <h1 className='text-4xl font-bold text-blue-700' style={{ fontFamily: "'Merriweather', serif" }}>
          APPLY YOUR JEC <br />ADMISSION FORM ONLINE
        </h1>
      </div>

      <div className='flex flex-col md:flex-row md:justify-between items-center'>
        <div className='md:w-1/2 mb-8 md:mb-0'>
          <p className='text-lg' style={{ fontFamily: "'Merriweather', serif" }}>
            Applying for admission to Janakpur Engineering College (JEC) is now easier than ever with our online application form. Prospective students can visit our official website, fill out the required information, upload necessary documents, and submit the form from the comfort of their homes. This streamlined process is designed to save time and ensure that all applications are processed efficiently. Don’t miss the opportunity to be part of JEC’s vibrant academic community. Apply online today and take the first step towards a promising engineering career!
          </p>
        </div>
        <div className='md:w-1/2 flex justify-center'>
          <img src={apply} alt="JEC Facilities" className='w-full max-w-lg rounded-lg shadow-lg' />
        </div>
      </div>

      <div className='my-12'>
        <h1 className='text-3xl font-bold text-blue-700 text-center' style={{ fontFamily: "'Merriweather', serif" }}>
          APPLICATION FORM
        </h1>
      </div>

      <form className='space-y-8' onSubmit={handleSubmit}>
        <div className='flex flex-col md:flex-row gap-8'>
          <div className='md:w-1/2'>
            <label className='block text-lg font-bold mb-2' style={{ fontFamily: "'Merriweather', serif" }}>
              FULL NAME:
              <input
                type='text'
                name='fullName'
                value={formData.fullName}
                onChange={handleChange}
                className='block w-full border border-blue-700 rounded-lg px-4 py-2 mt-2'
                required
              />
              {errors.fullName && <p className='text-red-700'>{errors.fullName}</p>}
            </label>

            <div className='mb-4'>
              <label className='block text-lg font-bold mb-2' style={{ fontFamily: "'Merriweather', serif" }}>
                GENDER:
              </label>
              <div className='flex gap-4'>
                <label className='flex items-center'>
                  <input type="radio" name="gender" value="male" onChange={handleChange} className='mr-2' required />
                  MALE
                </label>
                <label className='flex items-center'>
                  <input type="radio" name="gender" value="female" onChange={handleChange} className='mr-2' required />
                  FEMALE
                </label>
                <label className='flex items-center'>
                  <input type="radio" name="gender" value="others" onChange={handleChange} className='mr-2' required />
                  OTHERS
                </label>
              </div>
              {errors.gender && <p className='text-red-700'>{errors.gender}</p>}
            </div>

            <label className='block text-lg font-bold mb-2' style={{ fontFamily: "'Merriweather', serif" }}>
              DOB:
              <input
                type='date'
                name='dob'
                value={formData.dob}
                onChange={handleChange}
                className='block w-full border border-blue-700 rounded-lg px-4 py-2 mt-2'
                required
              />
              {errors.dob && <p className='text-red-700'>{errors.dob}</p>}
            </label>

            <label className='block text-lg font-bold mb-2 mt-3' style={{ fontFamily: "'Merriweather', serif" }}>
              ADDRESS:
              <input
                type='text'
                name='address'
                value={formData.address}
                onChange={handleChange}
                className='block w-full border border-blue-700 rounded-lg px-4 py-2 mt-2'
                required
              />
              {errors.address && <p className='text-red-700'>{errors.address}</p>}
            </label>
          </div>

          <div className='md:w-1/2 flex flex-col items-center'>
            <label className='text-lg font-bold mb-2' style={{ fontFamily: "'Merriweather', serif" }}>
              PHOTO
              <input
                type='file'
                name='photo'
                onChange={handleChange}
                className='block border border-blue-700 rounded-lg px-4 py-2 mt-2'
                required
              />
              {errors.photo && <p className='text-red-700'>{errors.photo}</p>}
            </label>
          </div>
        </div>

        <div className='text-center'>
          <h1 className='text-2xl font-bold text-red-700' style={{ fontFamily: "'Merriweather', serif" }}>
            Choose The Interested Course
          </h1>
          <div className='flex flex-row items-center justify-center mt-4 gap-5'>
            <label className='flex items-center'>
              <input type="radio" name="course" value="B.E Civil" onChange={handleChange} className='mr-2' required />
              B.E Civil
            </label>
            <label className='flex items-center'>
              <input type="radio" name="course" value="B.E Computer" onChange={handleChange} className='mr-2' required />
              B.E Computer
            </label>
            <label className='flex items-center'>
              <input type="radio" name="course" value="B.E Electronics" onChange={handleChange} className='mr-2' required />
              B.E Electronics
            </label>
          </div>
          {errors.course && <p className='text-red-700'>{errors.course}</p>}
        </div>

        <div className='space-y-8'>
          <div>
            <h1 className='text-2xl font-bold' style={{ fontFamily: "'Merriweather', serif" }}>
              IOE INFORMATION
            </h1>
            <div className='flex flex-col md:flex-row gap-8 mt-4'>
              <div className='flex flex-col w-full md:w-1/2'>
                <label className='text-lg font-bold mb-2'>
                  IOE ROLL.NO
                  <input
                    type='text'
                    name='ioeRollNo'
                    value={formData.ioeRollNo}
                    onChange={handleChange}
                    className='block w-full border border-blue-700 rounded-lg px-4 py-2 mt-2'
                    required
                  />
                  {errors.ioeRollNo && <p className='text-red-700'>{errors.ioeRollNo}</p>}
                </label>
              </div>
              <div className='flex flex-col w-full md:w-1/2'>
                <label className='text-lg font-bold mb-2'>
                  IOE RANK
                  <input
                    type='text'
                    name='ioeRank'
                    value={formData.ioeRank}
                    onChange={handleChange}
                    className='block w-full border border-blue-700 rounded-lg px-4 py-2 mt-2'
                    required
                  />
                  {errors.ioeRank && <p className='text-red-700'>{errors.ioeRank}</p>}
                </label>
              </div>
            </div>
          </div>

          <div>
            <h1 className='text-2xl font-bold' style={{ fontFamily: "'Merriweather', serif" }}>
              +2 CERTIFICATE
            </h1>
            <div className='flex flex-col md:flex-row gap-8 mt-4'>
              <div className='flex flex-col w-full md:w-1/3'>
                <label className='text-lg font-bold mb-2'>
                  TRANSCRIPT
                  <input
                    type='file'
                    name='transcript'
                    onChange={handleChange}
                    className='block border border-blue-700 rounded-lg px-4 py-2 mt-2'
                    required
                  />
                  {errors.transcript && <p className='text-red-700'>{errors.transcript}</p>}
                </label>
              </div>
              <div className='flex flex-col w-full md:w-1/3'>
                <label className='text-lg font-bold mb-2'>
                  MIGRATION
                  <input
                    type='file'
                    name='migration'
                    onChange={handleChange}
                    className='block border border-blue-700 rounded-lg px-4 py-2 mt-2'
                    required
                  />
                  {errors.migration && <p className='text-red-700'>{errors.migration}</p>}
                </label>
              </div>
              <div className='flex flex-col w-full md:w-1/3'>
                <label className='text-lg font-bold mb-2'>
                  CHARACTER
                  <input
                    type='file'
                    name='character'
                    onChange={handleChange}
                    className='block border border-blue-700 rounded-lg px-4 py-2 mt-2'
                    required
                  />
                  {errors.character && <p className='text-red-700'>{errors.character}</p>}
                </label>
              </div>
            </div>
          </div>

          <div>
            <h1 className='text-2xl font-bold' style={{ fontFamily: "'Merriweather', serif" }}>
              UNDERTAKING AND SIGNATURE
            </h1>
            <p className='text-lg mt-2'>
              <input
                type="checkbox"
                name="agreement"
                checked={formData.agreement}
                onChange={handleChange}
                className='mr-2'
                required
              />
              I hereby declare that the particulars furnished in this application form are correct and true and I fully agree to whatever actions taken as per rules and regulations of JEC Kupondole if found false or incorrect.
              {errors.agreement && <p className='text-red-700'>{errors.agreement}</p>}
            </p>
          </div>

          <div className='text-center'>
            <button
              className='bg-red-700 text-white py-3 px-6 rounded-lg text-xl hover:bg-red-800 transition duration-300'
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              Submit
            </button>
            <Link to='/printForm'>
              <button
                className='bg-red-700 text-white py-3 ms-4 px-6 rounded-lg text-xl hover:bg-red-800 transition duration-300'
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                Print Form
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
