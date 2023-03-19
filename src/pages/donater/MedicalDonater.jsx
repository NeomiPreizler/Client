import { Formik } from 'formik'
import './MedicalCss.css'

export const  MedicalDonater=()=> {
   
     
  const validate = (values) => {
      const errors = {};
      if (!values.userName) {
         errors.userName = 'Required';
      }
      if (!values.password) {
         errors.password = 'Required';
      }
     
      return errors;
   }
  const handleSubmit = (values, setSubmitting) => {
      setTimeout(() => {
         alert(JSON.stringify(values, null, 2));
         setSubmitting(false);
      }, 400);
   }
 
      return (
         <div id="expenseForm">
            <Formik
               initialValues={ {userName:'',password:''} }
               validate={values => validate(values)}
               onSubmit={(values, { setSubmitting }) => handleSubmit(values, setSubmitting)} > 
               {
                  ({
                     values,
                     errors,
                     touched,
                     handleChange,
                     handleBlur,
                     handleSubmit,
                     isSubmitting,
                     /* and other goodies */
                  }) => 
                  (
                     <form onSubmit={handleSubmit}>
                        <label for="userName">userName <span>{errors.userName && touched.userName && errors.userName}</span></label>
                        <input type="text" id="userName" name="userName" placeholder="Enter userName"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.userName} />

                        <label for="password">Password <span>{errors.password && touched.password && errors.password}</span></label>
                        <input type="password" id="password" name="password" placeholder="Enter password"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.password} />

                        {/* <label for="date">Spend Date <span>{errors.date && touched.date && errors.date}</span></label>
                        <input type="date" id="date" name="date" placeholder="Enter date"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.date} /> */}

                        {/* <label for="category">Category <span>{errors.category && touched.category && errors.category}</span></label> */}
                        {/* <select id="category" name="category"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.category}>
                           <option value="">Select</option>
                           <option value="Food">Food</option>
                           <option value="Entertainment">Entertainment</option>
                           <option value="Academic">Academic</option>
                        </select> */}

                        <input type="submit" value="Submit" disabled={isSubmitting} />
                     </form>
                  )
               }
            </Formik>
         </div>
      )
   }

export default MedicalDonater;