window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

/* Template Literal ES6 feature */
const createInnerHtml = () => {   
    const innerHtml = `
    <tr>
    <th></th>
    <th>Name</th>
    <th>Gender</th>
    <th>Department</th>
    <th>Salary</th>
    <th>Start Date</th>
    <th>Actions</th>
</tr>
<tr>
<td><img class="profile" alt="" src="../Assets/profile-images/Ellipse -1.png" alt=""></td>
                <td>Manali Parab</td>
                <td>Female</td>
                <td><div class='dept-label'>HR</div>
                    <div class='dept-label'>Engineering</div></td>
                <td>300000</td>
                <td>1 Nov 2020</td>
                <td>
                    <img id="1" onclick="remove(this)" alt="delete"
                         src="../Assets/icons/delete-black-18dp.svg">
                    <img id="1" alt="edit" onclick="update(this)"
                         src="../Assets/icons/create-black-18dp.svg">
                </td>
            </tr>
`;
document.querySelector('#table-display').innerHTML = innerHtml;
}