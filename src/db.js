import Datastore from 'nedb-promises';
import path from 'path'
import {remote} from 'electron';

const users = new Datastore ({
     autoload: true,
     filename:path.join(remote.app.getPath('userData'),'/users.db')
})

export default {
    users
}