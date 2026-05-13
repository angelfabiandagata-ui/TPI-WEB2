import sequelize from './config.js';
import {collection} from './collection.js';
import {comment} from './comment.js';
import {buy} from './buy.js';
import {complaint_comment} from './complaint_comment.js';
import {complaint_publication} from './complaint_publication.js';
import {complaint_user} from './complaint_user.js';
import {label} from './label.js';
import {favorite} from './favorite.js';
import {image} from './image.js';
import {news} from './news.js';
import {publication} from './publication.js';
import {follower} from './follower.js';
import {user} from './user.js';
import {validator} from './validator.js';
import {assessment} from './assessment.js';
import { message } from './message.js';



// To create a One-To-One relationship, the hasOne and belongsTo associations are used together;
// To create a One-To-Many relationship, the hasMany and belongsTo associations are used together;
// To create a Many-To-Many relationship, two belongsToMany calls are used together


//user a publication(1 - n)
user.hasMany(publication,{
    foreignKey: 'user_id',}
);
publication.belongsTo(user,{
    foreignKey: 'user_id',});



//colection y user a publication (n - m)
publication.belongsToMany(user, { 
    through: collection, 
    foreignKey: 'post_id', 
    otherKey: 'user_id',
    as: 'usuariosQueMeGuardaron'
});

user.belongsToMany(publication, { 
    through: collection, 
    foreignKey: 'user_id', 
    otherKey: 'post_id',
    as: 'misColecciones'
});



//user a complaint_user (1 - n)
user.hasMany(complaint_user,{
    foreignKey: 'user_id',
});
complaint_user.belongsTo(user,{
    foreignKey: 'user_id',
});

//user a favorites (n - m)
user.belongsToMany(publication, {
  foreignKey: 'user_id',  
  as: "Favoritos",
  through: "favorite",
});
publication.belongsToMany(user, {
  foreignKey: 'post_id',
  as: "Favoritos",
  through: "favorites",
});

//user y publicacion a buy (n - m)
user.belongsToMany(publication, {
    through: "buys", 
    foreignKey: 'user_id', 
    otherKey: 'post_id',    
    as: "misCompras", 
});

publication.belongsToMany(user, { 
    through: "buys", 
    foreignKey: 'post_id', 
    otherKey: 'user_id',  
    as: "compradores",  
});

//publication y user a complaint (1 - n)
publication.hasMany(complaint_publication,{
    foreignKey: 'post_id',
});
complaint_publication.belongsTo(publication,{
    foreignKey: 'post_id',
});

user.hasMany(complaint_publication,{
    foreignKey: 'user_id',
});
complaint_publication.belongsTo(user,{
    foreignKey: 'user_id',
});


//publication a image (1 - n)
publication.hasMany(image,{
    foreignKey: 'post_id',
});
image.belongsTo(publication,{
    foreignKey: 'post_id',
});

//publication y user a comment (1 - n)
publication.hasMany(comment,{
    foreignKey: 'post_id',
});
comment.belongsTo(publication,{
    foreignKey: 'post_id',
});
user.hasMany(comment,{
    foreignKey: 'user_id',
});
comment.belongsTo(user,{
    foreignKey: 'user_id',
});

//publication y user a label (1 - n)
publication.hasMany(label,{
    foreignKey: 'post_id',
});
label.belongsTo(publication,{
    foreignKey: 'post_id',
});
user.hasMany(label,{
    foreignKey: 'user_id',
});
label.belongsTo(user,{
    foreignKey: 'user_id',
});

//publication a validator (1 - n)
publication.hasMany(validator,{
    foreignKey: 'post_id',
});
validator.belongsTo(publication,{
    foreignKey: 'post_id',
});

//comment y publication a complaint_comment (1 - n)
comment.hasMany(complaint_comment,{
    foreignKey: 'comment_id',
});
complaint_comment.belongsTo(comment,{
    foreignKey: 'comment_id',
});
publication.hasMany(complaint_comment,{
    foreignKey: 'post_id',
});
complaint_comment.belongsTo(publication,{
    foreignKey: 'post_id',
});


//image y user a assessment (1 - n)
publication.hasMany(assessment,{
    foreignKey: 'post_id',
});
assessment.belongsTo(publication,{
    foreignKey: 'post_id',
});
user.hasMany(assessment,{
    foreignKey: 'user_id',
});
assessment.belongsTo(user,{
    foreignKey: 'user_id',
});

//user a news (1 - n)
user.hasMany(news, { 
    foreignKey: 'user_id_emisor', 
    as: 'misNotificaciones' });
news.belongsTo(user, { 
    foreignKey: 'user_id_receptor', 
    as: 'receptor' 
});

//user y follower a news (1 - n)
user.hasMany(news, { 
    foreignKey: 'user_id_emisor', 
    as: 'notificacionesEnviadas' 
});

news.belongsTo(user, { 
    foreignKey: 'user_id_emisor', 
    as: 'emisor' 
});

//assessment a news (1 - n)
assessment.hasMany(news,{
    foreignKey: 'assessment_id',
});
news.belongsTo(assessment,{
    foreignKey: 'assessment_id',
});

//complaint_user a news (1 - n)
complaint_user.hasMany(news,{
    foreignKey: 'complaint_user_id',
});
news.belongsTo(complaint_user,{
    foreignKey: 'complaint_user_id',
});

//complaint_publication a news (1 - n)
complaint_publication.hasMany(news,{
    foreignKey: 'complaint_publication_id',
});
news.belongsTo(complaint_publication,{
    foreignKey: 'complaint_publication_id',
});

//complaint_comment a news (1 - n)
complaint_comment.hasMany(news,{
    foreignKey: 'complaint_comment_id',
});
news.belongsTo(complaint_comment,{
    foreignKey: 'complaint_comment_id',
});

//comment a news (1 - n)
comment.hasMany(news,{
    foreignKey: 'comment_id',
});
news.belongsTo(comment,{
    foreignKey: 'comment_id',
});

// user a user (n - m)
user.belongsToMany(user, { 
    through: 'followers', 
    as: 'siguiendo',       // Alias para los que yo sigo
    foreignKey: 'seguidor_id', 
    otherKey: 'seguido_id' 
});

// user a user (n - m)
user.belongsToMany(user, { 
    through: 'followers', 
    as: 'seguidores',      
    foreignKey: 'seguido_id', 
    otherKey: 'seguidor_id' 
});

// Relación para el Emisor en mensajeria
user.hasMany(message, { 
    foreignKey: 'user_id_emisor', 
    as: 'mensajesEnviados' });
message.belongsTo(user, 
    { foreignKey: 'user_id_emisor', 
        as: 'emisor' 
    });

// Relación para el Receptor en mensajeria
user.hasMany(message, { 
    foreignKey: 'user_id_receptor', 
    as: 'mensajesRecibidos' 
    });
message.belongsTo(user, { 
    foreignKey: 'user_id_receptor', 
    as: 'receptor' 
    });