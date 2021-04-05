import React, { Component } from 'react';

class TableBody extends Component {
  render() {

        return (
            <div>
                <form action='#' name='Registration form'>
                    <table border='0.5' cellpadding="2" bgcolor="F0FFFF" align="center" cellspacing="2">
                        <tr>
                            <td colSpan='2'>
                                <center><font size='5'><b>Registration form </b></font></center>
                            </td>
                        </tr>
                        <tr>
            <td>Username</td>
            <td><input type="text" name="customerUserName"/></td>
            </tr>
            <tr>
            <td>Blood Group</td>
            <td><select name="customerBloodGroup">
            <option>----select----</option>
            <option>O-positive</option>
            <option>O-negative</option>
            <option>A-positive</option>
            <option>A-negative</option>
            <option>B-positive</option>
            <option>B-negative</option>
            <option>AB-positive</option>
            <option>AB-negative</option>
            
            
            </select></td>
            </tr>
            <tr>
            <td>Phone number</td>
            <td><input type="text" name="customerPhoneNumber"/></td>
            </tr>
            
            <tr>
            <td >Gender</td>
            <td><input type="radio" name="customerGender" value="male"/>Male
            <input type="radio" name="customerGender" value="female"/>Female
            </td>
            </tr>
                        <tr><td>Address:</td>
                            <td><input type='text' name='address' id="address" size="40" /></td></tr>
                        <tr><td> city:</td>
                            <td><select>
                                <option value="select">Select your city</option>
                                <option value="Ahmedabad">Ahmedabad</option>
                                <option value="Bangalore">Bangalore</option>
                                <option value="Bhopal">Bhopal</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Chandigarh">Chandigarh</option>
                                <option value="Hyderabad">Hyderabad</option>
                                <option value="New Delhi">New Delhi</option></select></td></tr>
                
            <tr>
            <td>Age</td>
            <td><input type="text" name="customerAge"/></td>
            </tr>
                        <br></br>
                        
                        <br></br>
                        <td><input type="checkbox" id="agreement" name="agreement" value="agreement" />
                            <label for="agreement"><b>I hereby confirm that the data submitted is true.</b></label><br />
                            <input type="checkbox" id="updates" name="updates" value="updates" />
                            <label for="agreement"><b>I hereby confirm that your organization can share me regular updates regarding the trainings.</b></label>
                        </td>
                        <br></br>
                        <br></br>
                        <br></br>
                        <tr>
                            <td><input type="submit" value="Clear" /></td>
                            <td colspan="2"><input type="submit" value="Submit Form" /></td>
                        </tr>
                    </table>
                </form>
            </div >
        )
    }
}

export default TableBody;