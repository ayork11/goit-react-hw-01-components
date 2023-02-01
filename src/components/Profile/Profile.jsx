import React from "react"
import css from './Profile.module.css';
export default class Profile extends React.Component {
      
        render () {
            return (
                <>
                    <div className={css.container}>
                   <div className={css.profileContainer}>     
                    <div className={css.profileContentContainer}>
                        <img
                            className={css.profileAvatar}
                            src={this.props.avatar}
                            alt="user avatar"
                            width="60px"
                            height="60px"
                            />
                        <h3 className={css.profileText}>
                            {this.props.username}
                        </h3>
                        <p className={css.profileText}>
                            @{this.props.tag}
                        </p>
                        <p className={css.profileText}>
                            {this.props.location}
                        </p>
                        <div className={css.profileStatsContainer}>
                            <div className={css.profileStatsItem}>
                            <span>Followers</span>
                                {this.props.followers}
                            </div>
                            <div className={css.profileStatsItem}>
                                    <span>Views</span>
                                {this.props.views}
                            </div>
                            <div className={css.profileStatsItem}>
                                    <span>Likes</span>
                                {this.props.likes}
                            </div>
                    </div>
                    </div>
            </div>    
        </div>        
            </>
        )
    }
}
