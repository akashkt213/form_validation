function FormComp() {
  return (
    <>
      <div className="flex items-center justify-center text-3xl">
        <h1 className="mt-4 ">Create Student</h1>
      </div>

      <div className="w-auto max-w-4xl mx-auto border flex justify-center flex-col h-auto p-4 rounded-md">
        <div>
          <form>
            <div className="flex justify-between w-auto gap-3 mb-4">
              <div className="flex flex-col flex-grow gap-1">
                <label>Name</label>
                <input
                  className="flex border rounded-md p-3"
                  placeholder="Your name"
                />
              </div>

              <div className="flex flex-col flex-grow gap-1">
                <label>Email</label>
                <input
                  className="flex border rounded-md p-3"
                  placeholder="Your email"
                />
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <label>Biographical Statement</label>
              <input
                className="flex border rounded-md grid-rows-2 p-3"
                placeholder="A bit about you"
              />
            </div>
            <div></div>
            <div className="flex flex-row gap-24">
              <div className="flex flex-col flex-grow gap-1 mb-2">
                <label>Level</label>
                <select className="p-4 rounded-md">
                  <option value="freshmen">Freshmen</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="expert">Expert</option>
                </select>
              </div>
              <div className="flex flex-col flex-grow gap-1">
                <label>GPA / %</label>
                <select className="p-4 rounded-md">
                  <option value="gpa">GPA</option>
                  <option value="percentage">Percentage</option>
                </select>
              </div>
              <div className="flex flex-col flex-grow gap-1 ">
                <label>Date Enrolled</label>
                <input className="p-3 rounded-md border" type="date" />
              </div>
            </div>

            <div className="flex gap-5 mt-5">
              <p>Major</p>
              <div className="flex gap-2">
                <div className="flex gap-1">
                  <input type="radio" value="Physics" />
                  <label>Physics</label>
                </div>
                <div className="flex gap-1">
                  <input type="radio" value="Mathematics" />
                  <label>Mathematics</label>
                </div>
                <div className="flex gap-1">
                  <input type="radio" value="Chemistry" />
                  <label>Chemistry</label>
                </div>
                <div className="flex gap-1">
                  <input type="radio" value="Computer Science" />
                  <label>Computer Science</label>
                </div>
              </div>
            </div>
            <input
              type="submit"
              className="text-lg border bg-slate-300 px-4 py-2 mt-4 rounded-md hover:bg-slate-500"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default FormComp;
