import './current.css';

export default function Current({
    text,
    temp,
  }) {
   
      return (
            <ul>
              <li>{text}</li>
              <li>{temp}</li>
            </ul>
        );
  }