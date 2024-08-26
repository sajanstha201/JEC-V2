import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function PrintForm() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFormData = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.get('http://192.168.1.135:8000/api/application-forms/', {
          headers: {
            'Authorization': `Token ${token}`, // Corrected format
          },
        });
        const latestForm = response.data[response.data.length - 1];
        setFormData(latestForm);
      } catch (error) {
        console.error('Error fetching form data:', error.response ? error.response.data : error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFormData();
  }, []);

  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <div className='printable-area p-5'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-5'>
            <h1 className='text-2xl font-serif text-blue-600'>APPLICATION FORM</h1>
          </div>

          <div className='relative mb-8'>
            <div className='flex flex-col gap-4'>
              <div className='space-y-2'>
                <div className='text-base font-serif'><strong>Full Name:</strong> {formData.full_name || 'N/A'}</div>
                <div className='text-base font-serif'><strong>Date of Birth:</strong> {formData.date_of_birth || 'N/A'}</div>
                <div className='text-base font-serif'><strong>Address:</strong> {formData.address || 'N/A'}</div>
                <div className='text-base font-serif'>
                  <strong>Gender:</strong> {formData.gender === 'M' ? 'Male' : formData.gender === 'F' ? 'Female' : formData.gender === 'O' ? 'Others' : 'N/A'}
                </div>
                <div className='text-base font-serif'>
                  <strong>The Interested Course is:</strong> 
                  {formData.interested_course === 'civil' ? 'B.E Civil' : formData.interested_course === 'computer' ? 'B.E Computer' : formData.interested_course === 'electronics' ? 'B.E Electronics' : 'N/A'}
                </div>
                <div className='text-base font-serif'><strong>IOE Entrance Symbol.No:</strong> {formData.ioe_roll_no || 'N/A'}</div>
                <div className='text-base font-serif'><strong>IOE Rank:</strong> {formData.ioe_rank || 'N/A'}</div>
              </div>
              <div className='absolute top-0 right-0 w-48 h-auto'>
                <img src={formData.photo || '/path/to/default-image.jpg'} alt="User Photo" className='w-full h-auto' />
              </div>
            </div>
          </div>

          <div className='mb-8'>
            <h2 className='text-xl font-serif mb-3'>+2 Certificate</h2>
            <div className='space-y-2'>
              <div className='text-base font-serif'><strong>Transcript:</strong> <a href={formData.transcript || '#'} target="_blank" rel="noopener noreferrer" className='text-blue-600'>View Transcript</a></div>
              <div className='text-base font-serif'><strong>Migration:</strong> <a href={formData.migration || '#'} target="_blank" rel="noopener noreferrer" className='text-blue-600'>View Migration Certificate</a></div>
              <div className='text-base font-serif'><strong>Character:</strong> <a href={formData.character || '#'} target="_blank" rel="noopener noreferrer" className='text-blue-600'>View Character Certificate</a></div>
            </div>
          </div>

          <div className='mb-8'>
            <h2 className='text-xl font-serif mb-3'>Undertaking and Signature</h2>
            <p className='text-base font-serif'>
              <input type="checkbox" name="agreement" checked={formData.agreement} className='mr-2' readOnly />
              I hereby declare that the particulars furnished in this application form are correct and true and I fully agree to whatever actions taken as per rules and regulations of JEC Kupondole if found false or incorrect.
            </p>
          </div>

          <div className='text-center mt-8'>
            <button type='button' onClick={handlePrint} className='bg-blue-600 text-white py-2 px-4 rounded'>
              Print
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media print {
          body * {
            visibility: hidden;
          }

          .printable-area, .printable-area * {
            visibility: visible;
          }

          .printable-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            margin: 0;
            padding: 0;
          }

          .absolute {
            position: absolute;
            top: 0;
            right: 0;
            width: 150px; /* Adjust as needed */
          }

          .text-center {
            display: none;
          }
        }
      `}</style>
    </React.Fragment>
  );
}
