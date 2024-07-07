import React, { ChangeEvent, useState } from 'react';
import Story1 from '../assets/Alice.jpg';
import Story2 from '../assets/Bob.jpg';
import Story3 from '../assets/Charlie.jpg';
import { FaPlus, FaSmile, FaImage, FaVideo, FaCalendar, FaEllipsisH } from 'react-icons/fa';
import profile from '../assets/profile-p.jpg';
import verify from '../assets/tick.svg';

// Define types for story and suggestion
interface Story {
  id: number;
  author: string;
  content: string;
  imageUrl: string;
}

interface Suggestion {
  id: number;
  name: string;
  about: string;
  photo: string;
  verified: boolean;
}

const Feed: React.FC = () => {
  const stories: Story[] = [
    { id: 1, author: 'Alice', content: 'Story 1', imageUrl: Story1 },
    { id: 2, author: 'Alice', content: 'Story 1', imageUrl: Story1 },
    { id: 3, author: 'Bob', content: 'Story 2', imageUrl: Story2 },
    { id: 4, author: 'Bob', content: 'Story 2', imageUrl: Story2 },
    { id: 5, author: 'Charlie', content: 'Story 3', imageUrl: Story3 },
    { id: 6, author: 'Charlie', content: 'Story 3', imageUrl: Story3 },
  ];

  const suggestions: Suggestion[] = [
    {
      id: 1,
      name: "John Doe",
      about: "Loves traveling and reading",
      photo: Story1,
      verified: true,
    },
    {
      id: 2,
      name: "Jane Smith",
      about: "Tech enthusiast and engineer",
      photo: Story2,
      verified: false,
    },
    {
      id: 3,
      name: "Alice Johnson",
      about: "Fitness coach and yoga instructor",
      photo: Story3,
      verified: true,
    },
    {
      id: 4,
      name: "Bob Brown",
      about: "Gamer and Software developer",
      photo: Story1,
      verified: true,
    },
    {
      id: 5,
      name: "John Doe",
      about: "Loves traveling",
      photo: Story2,
      verified: false,
    },
  ];

  const [text, setText] = useState<string>("");

  // Update text area height based on input
  const handleInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = event.target;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
    setText(event.target.value);
  };

  return (
    <div className="bg-[#eff2f6] flex justify-center p-5 gap-16">
      <div className="max-w-2xl w-full">
        {/* Stories Section */}
        <section className="flex mb-5 pt-2 pb-2 pr-2">
          <div className="bg-white text-center w-44 h-56 p-2 mr-2 rounded-lg cursor-pointer flex flex-col items-center">
            <button className="bg-[#eff2f6] text-gray-800 border-none p-6 rounded-full cursor-pointer text-xl">
              <FaPlus />
            </button>
            <p className="mt-2">Post a <br /> Story</p>
          </div>
          <div className="flex overflow-x-auto pr-2 pb-2 space-x-2">
            {stories.map(story => (
              <div key={story.id} className="relative flex-shrink-0 w-40 h-56 rounded-lg overflow-hidden cursor-pointer">
                <img
                  src={story.imageUrl}
                  alt={story.author}
                  className="w-full h-full object-cover brightness-50 transition duration-300 ease-in-out hover:brightness-30"
                />
                <div className="absolute bottom-0 left-0 right-0 p-2 text-white">
                  <p className="text-sm font-semibold">{story.author}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Write Post Section */}
        <section className="mb-5 p-5 bg-white rounded-lg">
          <div className="flex flex-col gap-5">
            <div className='flex items-center gap-5 mb-10'>
              <div className="w-14 h-12 overflow-hidden rounded-full">
                <img src={profile} alt="Profile" className="w-full h-full object-cover" />
              </div>
              <textarea
                placeholder="Write your post..."
                className="flex-1 p-2 border border-gray-300 rounded-md resize-none min-h-[5rem] overflow-hidden focus:outline-none"
                value={text}
                onChange={handleInput}
              />
            </div>
            <div className='flex justify-between'>
              <div className="flex gap-2">
                <button className="flex items-center px-3 py-2 bg-[#eff2f6] text-gray-800 rounded-md hover:bg-gray-200">
                  <FaImage className='text-green-500 mr-2' /> Photo
                </button>
                <button className="flex items-center px-3 py-2 bg-[#eff2f6] text-gray-800 rounded-md hover:bg-gray-200">
                  <FaVideo className='text-blue-500 mr-2' /> Video
                </button>
                <button className="flex items-center px-3 py-2 bg-[#eff2f6] text-gray-800 rounded-md hover:bg-gray-200">
                  <FaCalendar className='text-red-500 mr-2' /> Event
                </button>
                <button className="flex items-center px-3 py-2 bg-[#eff2f6] text-gray-800 rounded-md hover:bg-gray-200">
                  <FaSmile className='text-yellow-500 mr-2' /> Feeling/Activity
                </button>
              </div>
              <button className="px-3 py-2 bg-[#eff2f6] text-gray-800 rounded-md hover:bg-gray-200">
                <FaEllipsisH />
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Who to Follow Section */}
      <aside className="w-full max-w-sm bg-gray-50 p-5 rounded-lg">
        <h2 className="text-gray-800 mb-10 text-xl font-semibold">Who to Follow</h2>
        {suggestions.map(suggestion => (
          <div key={suggestion.id} className="flex items-center mb-9">
            <div className="w-12 h-12 overflow-hidden rounded-full flex-shrink-0">
              <img src={suggestion.photo} alt={suggestion.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-grow pl-3">
              <div className="flex items-center gap-2 text-gray-800 font-semibold">
                {suggestion.name}
                {suggestion.verified && <img src={verify} alt="verify" className="w-4 h-4" />}
              </div>
              <div className="text-gray-600 text-sm">{suggestion.about}</div>
            </div>
            <button className="w-12 h-12 flex items-center justify-center bg-blue-100 text-gray-800 rounded-full hover:bg-blue-200">
              <FaPlus />
            </button>
          </div>
        ))}
        <button className="w-full py-2 bg-blue-100 text-blue-500 rounded-lg hover:bg-blue-200">
          View More
        </button>
      </aside>
    </div>
  );
};

export default Feed;
