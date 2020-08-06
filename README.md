<h1>Material Ui IconButton </h1>


<h3>Dependicies</h3>
   
   
   "@material-ui/icons": "^4.9.1",<br>
    "@material-ui/styles": "^4.10.0",<br>
    "@material/react-icon-button": "^0.15.0",<br>
    "@testing-library/jest-dom": "^4.2.4",<br>
    "@testing-library/react": "^9.5.0",<br>
    "@testing-library/user-event": "^7.2.1",<br>
    "@types/jest": "^24.9.1",<br>
    "@types/node": "^12.12.53",<br>
    "@types/react": "^16.9.44",<br>
    "@types/react-dom": "^16.9.8",<br>
    "react": "^16.13.1",<br>
    "react-dom": "^16.13.1",<br>
    "react-scripts": "3.4.1",<br>
    "typescript": "^3.7.5"<br>
    
    
    <h3>For installation </h3>
    
     <h2>npm i</h2>
     
     
     
     
     <h2>For Clone this project</h2>
     
  $ git clone  https://github.com/rahuljha12527/MaterialUiStarter-Button.git
  
   <h3For run this project</h3>
     
     npm start
     
    
    <h3>Output</h3>
  
  ![ImageforGithub](https://user-images.githubusercontent.com/45179877/89106278-45149f00-d446-11ea-9b8f-772263bbda72.PNG)
  
  
  {% for state in states.input_datetime -%}
{%- if loop.first %}
{% elif loop.last %}
{% else %}          
{% endif -%}
| {{ state.name | capitalize }} | {{ state.attributes.day }}/{{ state.attributes.month }}/{{ state.attributes.year }} |
{%- endfor %}

