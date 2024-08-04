import React from 'react';
import apply from '../images/apply.jfif';
import { Link } from 'react-router-dom';


export default function OnlineApply() {
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

      <form className='space-y-8'>
        <div className='flex flex-col md:flex-row gap-8'>
          <div className='md:w-1/2'>
            <label className='block text-lg font-bold mb-2' style={{ fontFamily: "'Merriweather', serif" }}>
              FULL NAME:
              <input type='text' className='block w-full border border-blue-700 rounded-lg px-4 py-2 mt-2' />
            </label>

            <div className='mb-4'>
              <label className='block text-lg font-bold mb-2' style={{ fontFamily: "'Merriweather', serif" }}>
                GENDER:
              </label>
              <div className='flex gap-4'>
                <label className='flex items-center'>
                  <input type="radio" name="gender" value="male" className='mr-2' />
                  MALE
                </label>
                <label className='flex items-center'>
                  <input type="radio" name="gender" value="female" className='mr-2' />
                  FEMALE
                </label>
                <label className='flex items-center'>
                  <input type="radio" name="gender" value="others" className='mr-2' />
                  OTHERS
                </label>
              </div>
            </div>

            <label className='block text-lg font-bold mb-2' style={{ fontFamily: "'Merriweather', serif" }}>
              DOB:
              <input type='date' className='block w-full border border-blue-700 rounded-lg px-4 py-2 mt-2' />
            </label>

            <label className='block text-lg font-bold mb-2 mt-3' style={{ fontFamily: "'Merriweather', serif" }}>
              ADDRESS:
              <input type='text' className='block w-full border border-blue-700 rounded-lg px-4 py-2 mt-2' />
            </label>
          </div>

          <div className='md:w-1/2 flex flex-col items-center'>
            <label className='text-lg font-bold mb-2' style={{ fontFamily: "'Merriweather', serif" }}>
              PHOTO
              <input type='file' className='block border border-blue-700 rounded-lg px-4 py-2 mt-2' />
            </label>
          </div>
        </div>

        <div className='text-center'>
          <h1 className='text-2xl font-bold text-red-700' style={{ fontFamily: "'Merriweather', serif" }}>
            Choose The Interested Course
          </h1>
          <div className='flex flex-row items-center justify-center mt-4 gap-5'>
            <label className='flex items-center'>
              <input type="radio" name="course" value="B.E Civil" className='mr-2' />
              B.E Civil
            </label>
            <label className='flex items-center'>
              <input type="radio" name="course" value="B.E Computer" className='mr-2' />
              B.E Computer
            </label>
            <label className='flex items-center'>
              <input type="radio" name="course" value="B.E Electronics" className='mr-2' />
              B.E Electronics
            </label>
          </div>
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
                  <input type='text' className='block w-full border border-blue-700 rounded-lg px-4 py-2 mt-2' />
                </label>
              </div>
              <div className='flex flex-col w-full md:w-1/2'>
                <label className='text-lg font-bold mb-2'>
                  IOE RANK
                  <input type='text' className='block w-full border border-blue-700 rounded-lg px-4 py-2 mt-2' />
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
                  <input type='file' className='block border border-blue-700 rounded-lg px-4 py-2 mt-2' />
                </label>
              </div>
              <div className='flex flex-col w-full md:w-1/3'>
                <label className='text-lg font-bold mb-2'>
                  MIGRATION
                  <input type='file' className='block border border-blue-700 rounded-lg px-4 py-2 mt-2' />
                </label>
              </div>
              <div className='flex flex-col w-full md:w-1/3'>
                <label className='text-lg font-bold mb-2'>
                  CHARACTER
                  <input type='file' className='block border border-blue-700 rounded-lg px-4 py-2 mt-2' />
                </label>
              </div>
            </div>
          </div>

          <div>
            <h1 className='text-2xl font-bold' style={{ fontFamily: "'Merriweather', serif" }}>
              UNDERTAKING AND SIGNATURE
            </h1>
            <p className='text-lg mt-2'>
              <input type="checkbox" name="agreement" className='mr-2' />
              I hereby declare that the particulars furnished in this application form are correct and true and I fully agree to whatever actions taken as per rules and regulations of JEC Kupondole if found false or incorrect.
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
