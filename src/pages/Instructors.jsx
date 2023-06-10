

const Instructors = () => {
    const Instructors = [
        {
          id: 1,
          image: 'class1.jpg',
          name: 'instructor1',
          email: 'john@doe.com'
        },
        {
          id: 2,
          image: 'class2.jpg',
          name: 'Instructor 2',
          email: 'Jane@smith.com'
        },
        // Add more class objects as needed
      ];
    return (
        <div className="my-20">
          <h2 className="text-2xl font-bold mb-4">Instructors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Instructors.map((cls) => (
              <div
                key={cls.id}
                className='p-4  border border-gray-300 rounded bg-red-200'
              >
                <img
                  src={cls.image}
                  alt={cls.name}
                  className="w-full h-40 object-cover mb-4"
                />
                <h3 className="text-lg font-bold">{cls.name}</h3>
                <p className="text-gray-500">Instructor: {cls.email}</p>
              </div>
            ))}
          </div>
        </div>
    );
};

export default Instructors;