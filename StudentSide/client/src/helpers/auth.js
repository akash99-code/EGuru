import cookie from 'js-cookie';

//set in cookie
export const  setCookie=(key,value)=>{
    if(window!=='undefined')
    {
        cookie.set(key, value,{ expires:1});
    }
}

//remove from cookie
export const removeCookie=key=>{
    if(window!=='undefined')
    {
        cookie.remove(key, { expires:1});
    }
}

//get from cookie like token
export const getCookie=key=>{
    if(window!=='undefined')
    {
        return cookie.get(key);
    }
}

//set in local storage
export const setLocalStorage=(key,value)=>{
    if(window!=='undefined')
    {
        localStorage.setItem(key,JSON.stringify(value));
    }
}

//remove from loccal storage
export const removeLocalStorage= key =>{
    if(window!=='undefined')
    {
        localStorage.removeItem(key);
    }
}

//auth user AFTER LOGIN
export const authenticate=(response,next)=>{
    setCookie('token', response.data.token);
    setLocalStorage('user', response.data.user);
    next();
}

//signout
export const signout=()=>{
    removeCookie('token');
    removeLocalStorage('user');
}

//get user info from local storage
export const  isAuth=()=>{
    if(window!=='undefined')
    {
        if(getCookie('token'))
        {
            if(localStorage.getItem('user'))
            {
                var jp={user:JSON.parse(localStorage.getItem('user')), token:getCookie('token')};
                return jp;
            }
            else
            {
                return false;
            }
        }
        else
        {
            return false;
        }
    }
}

//update user data in local storage
export const  updateUser=(response, next)=>{
    if(window!=='undefined')
    {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    next();
}