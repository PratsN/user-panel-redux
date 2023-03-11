# user-panel-redux

User-Panel website created using react and redux 

website Link : https://user-panel-redux.netlify.app/

This is a React+Redux website that allows users to see the data in tabular format

Installation and Setup :

1. Clone the repository: git clone https://github.com/PratsN/user-panel-redux.git
2. Install Dependencies require for website : npm install
3. Run the development server: npm start

Working :

1. Navigate to http://localhost:3000 to see the webpage.
2. Landing Page is divided into 3 sections Header, Footer and Content 
3. Header is showing the name
4. Footer is showing the year and copyrights 
5. In the content section user data is displayed in tabular format which consist of following fields
  a. ID 
  b. Name 
  c. Username
  d. Email 
  e. Action
6. In the Action field there is a button "Details". After clicking the button Modal will get open on the screen
&. Modal will consists of Following fileds

  A. Address -> Suit Number , Street , City and Zipcode
  
  B. Phone No.
  
  C. Website -> Besides the webiste there is a warning sign which is a Tooltip so 
  If you hover on the warning sign then you will be able to see some text
  
7. Website provided in the Modal is working and It will redirect you to that particular website (Some webpages are not available so they might give you page not found error)
8. Modal is having a cross button at the right-top to close it also If you click anywhere the screen or If you press ESC key then also modal will be closed

Technical Observations :

1. React Framework is used to implement this website
2. Axios is used to make an API call
3. Data is getting rendered finely
4. Redux Toolkit is used to manage the state of data as createstore is now deprecated
4. MUI (Material UI) is a lighweight framework used to implement some UI functionality
5. With MUI it is advisable to use inline css
6. Modal functionality is given to the Button at Action field because user might not be able to understand If the rows are clickable or not 
7. Colour schema followed to create this website is "Green - Blue - Orange"

Credits : This application was created by Pratiksha Nagawade
