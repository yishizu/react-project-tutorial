
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const InputList = ({list})=>{
    return (<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    {list.map((item, index) => (
      <ListItem key={item.id}>
        <ListItemText primary={`${item.name} - ${item.age} years old`} />
      </ListItem>
    ))}
  </List>);
}

export default InputList;