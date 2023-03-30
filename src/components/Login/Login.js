import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createClient } from "@supabase/supabase-js";


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'@INTEC '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function hola(){
    
const { data: { users }, error } = await supabase.auth.admin.listUsers()

 console.log(users)

 console.log(error)
}
hola();
export default function Login() {

  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] =  React.useState("");

  


  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const { user, error } = await supabase.auth.signInWithPassword({
      email: username,
      password: password
    });
  
    if (error) {
      console.log(error);
    } else {
      console.log(user);
      const { data: userData, error: userError } = await supabase
        .from("Usuario")
        .select("rol")
        .eq("id", user.id)
        .single();
  
      if (userError) {
        console.log(userError);
      } else {
        if (userData.rol === 3) {
          navigate('/admin');
        } else if (userData.rol === 2) {
          navigate('/profesores');
        } else if (userData.rol === 1) {
          navigate('/estudiantes');
        } else{
          console.log("algo anda mal con la autenticacion")
        }
      }
    }
  };
  

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 24,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Log In
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Usename"
                  name="username"
                  onChange={(e) => { setUsername(e.target.value) }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={(e) => { setPassword(e.target.value) }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Recordarme."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Acceder
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Olvidaste tu contrasena? Recuperar
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}