import React from 'react';

const HomePage = () => {
  return (
    <div className="md:px-10 sm:px-10 xl:px-28">
      <div className="grid grid-cols-2 gap-8">
        {/* First Column */}
        <div className="col-span-1">
          {/* Content for the first column */}
          <div className="bg-white p-4 ">
            {/* Your content here */}
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque fugiat possimus culpa, aliquam quo praesentium, et eaque excepturi cum nisi, rerum optio quam nobis esse tempora magnam quidem blanditiis nostrum. Explicabo quia consequuntur soluta, dicta accusamus nam? Consectetur atque quas, tempora veritatis, quod id pariatur amet eveniet fugiat deserunt est?</p>
          </div>
        </div>

        {/* Second Column */}
        <div className="col-span-1">
          {/* Content for the second column */}
          <div className="bg-white p-4 ">
            {/* Your content here */}
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, corrupti! Repellendus iste libero possimus aliquam atque sapiente voluptate tempore, quisquam eaque, natus enim molestiae earum veritatis distinctio eligendi ipsum ipsam? Animi accusantium rem odit explicabo eligendi, illo labore eveniet nobis rerum iusto, enim quidem, voluptatum iure alias impedit veritatis quia!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;