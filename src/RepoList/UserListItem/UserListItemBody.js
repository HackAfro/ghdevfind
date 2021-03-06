import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Briefcase } from 'react-feather';

import { TEXT_COLOR } from '../../helpers/helper';
import Badge from '../../Badge/Badge';
import UserFollowing from './UserFollowing';

const UserListItemBody = ({
  body: {
    name, login, isHireable, following, followers, bio,
  },
}) => (
  <div className="list-body">
    <div className="list-header">
      <div className="action-container">
        <div>
          <Link to={`/user/${login}`} className="list-header__text underline">
            {name}
          </Link>
          <h5 className="list-header__subtext">{login}</h5>
        </div>
        <div>
          <Badge
            color="white"
            textColor={TEXT_COLOR}
            text={isHireable ? 'Hireable' : 'Unavailable'}
            icon={<Briefcase className="icon" size={12} />}
            fontSize="11"
            uppercase={false}
            fontWeight={500}
          />
        </div>

        {/* <button className="follow-button">Follow</button> */}
      </div>
      <UserFollowing
        userDetails={{
          followers: followers.totalCount || 0,
          following: following.totalCount || 0,
        }}
      />
    </div>
    <div className="list-text">
      <p className="list-body__text">{bio}</p>
    </div>
  </div>
);

UserListItemBody.propTypes = {
  body: PropTypes.shape({
    login: PropTypes.string,
    bio: PropTypes.string,
    isHireable: PropTypes.any,
    following: PropTypes.objectOf(PropTypes.any),
    followers: PropTypes.objectOf(PropTypes.any),
  }).isRequired,
};

export default UserListItemBody;
