import img from "./LOGO.png";

const Body = () => {
  return (
    <div className="body">
      <table className="table-data">
        <tbody>
          <tr>
            <th className="table-header">Name</th>
            <th className="table-header">Reg No.</th>
            <th className="table-header">College Name</th>
          </tr>
          <tr>
            <td className="table-data">Nito Tony C</td>
            <td className="table-data">720721104127</td>
            <td className="table-data">
              Hindusthan College of Engineering and Technology
            </td>
          </tr>
          <tr>
            <td className="table-data">Nito Tony C</td>
            <td className="table-data">720721104127</td>
            <td className="table-data">
              Hindusthan College of Engineering and Technology
            </td>
          </tr>
          <tr>
            <td className="table-data">Nito Tony C</td>
            <td className="table-data">720721104127</td>
            <td className="table-data">
              Hindusthan College of Engineering and Technology
            </td>
          </tr>
          <tr>
            <td className="table-data">Nito Tony C</td>
            <td className="table-data">720721104127</td>
            <td className="table-data">
              Hindusthan College of Engineering and Technology
            </td>
          </tr>
        </tbody>
      </table>

      <div className="Form-section">
        <div className="total-body">
          <img src={img} alt="" className="logo" />
          <form action="" className="form">
            <div className="use">
              <label htmlFor="user-name" className="label">
                User-name
              </label>
              <input name="user-name" type="text" className="input" />
            </div>
            <div className="pass">
              <label htmlFor="pass-word" className="label">
                Password
              </label>
              <input type="text" name="pass-word" className="input" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Body;
