import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import {linkTo, reqHeader} from "../../utils/comUtils";
import BaseComponent from "../../components/common/BaseComponent";
import MBottomNavigation from "../../components/common/MBottomNavigation";
import {setSongTop, getChooseList, getHistorySongList, push} from "../../actions/audioActons";

import {Paper, RaisedButton, Tab, Tabs, FloatingActionButton, List, ListItem, CircularProgress} from "material-ui";
import ReloadIcon from "material-ui/svg-icons/action/autorenew";
import PlayIcon from "material-ui/svg-icons/av/play-arrow";
import StopIcon from "material-ui/svg-icons/av/pause";
import PlayingIcon from "material-ui/svg-icons/av/equalizer";
import PersonIcon from "material-ui/svg-icons/social/person";
import MusicIcon from "material-ui/svg-icons/image/music-note";
import NextIcon from "material-ui/svg-icons/av/skip-next";
import PublishIcon from "material-ui/svg-icons/editor/publish";
import DeleteIcon from "material-ui/svg-icons/action/delete";
import MusicStyleIcon from "material-ui/svg-icons/action/settings-input-component";
import SongItem from "../../components/common/SongItem";
import BarrageIcon from "../../../img/common/icon_barrage.png";
import EffectIcon from "../../../img/common/icon_effect.png";

const style = {
    controllerBtn: {
        width: "50%",
        height: "3.4rem",
        textAlign: "center",
        marginTop: "1rem",
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        button: {
            backgroundColor: '#ffc51b',
            width: '1.867rem',
            height: '1.867rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '1.867rem'
        }
    },
    extArea: {
        border: "none",
        boxShadow: "none",
        width: "100%",
        display: "flex",
        marginTop: "16%",
        padding: '0 1.4rem',
        justifyContent: "center",
        alignItems: "center",
        btn: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #ff6832",
            borderRadius: '1rem',
            width: '2.2rem',
            height: '1.2rem',
            icon: {
                height: "20px",
                marginRight: '.1rem'
            },
            label: {
                margin: 0,
                fontSize: '.45rem',
                color: "#ff6832"
            }
        }
    },
    tabs: {
        leftTab: {
            flexDirection: "row",
            height: 36,
            border: "1px solid white",
            borderRadius: "6px 0 0 6px"
        },
        centerTab: {
            flexDirection: "row",
            height: 36,
            borderTop: "1px solid white",
            borderBottom: "1px solid white"
        },
        rightTab: {
            flexDirection: "row",
            height: 36,
            border: "1px solid white",
            borderRadius: "0 6px 6px 0"
        }
    },
    chooseList: {
        deleteButton: {
            delIng: {
                fontSize: 10,
                justifyContent: "center",
                alignItems: "center",
                display: "flex"
            }
        }
    }
};
const UPDATE_CHOOSE_SONG_TIME_COUNT = 5;
const PLAY_CONTROLLER_RE_SING = 5;
const PLAY_CONTROLLER_ORIGINAL_ACCOMPANY = 6;
const PLAY_CONTROLLER_PAUSE_PLAY = 7;
const PLAY_CONTROLLER_NEXT = 8;

class SongController extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            playList: [],
            historySongList: [],
            tabIndex: 0,
            delChooseSongIdIng: 0,
            updateChooseSongsCount: 0,
            emptyChooseSongs: false
        };
        this.unChoose = this.unChoose.bind(this);
        this.playController = this.playController.bind(this);
        this.onPushSongSuccess = this.onPushSongSuccess.bind(this);
        this.handelChangeTab = this.handelChangeTab.bind(this);
    }

    componentDidUpdate(preProps) {
        if (preProps.songs.chooseListStamp !== this.props.songs.chooseListStamp) {
            this.updateSong();
        }
        if (preProps.songs.getHistorySongListStamp !== this.props.songs.getHistorySongListStamp) {
            this.updateHistorySong();
        }

    }

    componentWillUnmount() {
        clearInterval(this.state.updateChooseSongsInterval);
    }

    componentDidMount() {
        const param = {};
        const updateChooseSongsInterval = this.state.updateChooseSongsInterval;
        const paramHistory = {type: "history"};
        this.props.action_getChooseList(param, reqHeader(param));
        this.props.action_getHistorySongList(paramHistory, reqHeader(paramHistory));
        if (!updateChooseSongsInterval) {
            this.state.updateChooseSongsInterval = setInterval(() => {
                if (this.state.updateChooseSongsCount >= UPDATE_CHOOSE_SONG_TIME_COUNT && this.state.tabIndex === 1) {
                    this.props.action_getChooseList(param, reqHeader(param));
                    this.state.updateChooseSongsCount = 0;
                } else {
                    this.state.updateChooseSongsCount += 1;
                }
            }, 1000);
        }
    }

    render() {
        const {playList, historySongList} = this.state;
        const playingSong = this.state.playingSong;
        let backgroundColor = ['transparent', 'transparent', 'transparent'];
        let fontColor = ['white', 'white', 'white'];
        backgroundColor[this.state.tabIndex] = "white";
        fontColor[this.state.tabIndex] = "#ff6832";

        return (
            <div>
                <Tabs
                    inkBarStyle={{display: "none"}}
                    tabItemContainerStyle={{backgroundColor: "#ff8333", padding: "6px 10%"}}
                >
                    <Tab
                        onActive={() => {
                            this.handelChangeTab(0);
                        }}
                        buttonStyle={{...style.tabs.leftTab, backgroundColor: backgroundColor[0], color: fontColor[0]}}
                        label={
                            <div>
                                播放控制
                            </div>
                        }>
                        <div style={{
                            marginTop: "10%",
                            display: "flex",
                            width: "90%",
                            marginLeft: "5%",
                            flexWrap: "wrap"
                        }}>
                            <div style={style.controllerBtn}>
                                <div style={style.controllerBtn.button} onTouchTap={() => {
                                    this.playController(PLAY_CONTROLLER_RE_SING);
                                }}>
                                    <ReloadIcon color="white" style={{width: '1.1rem', height: '1.1rem'}}/>
                                </div>
                                <p style={{margin: '.3rem 0'}}>重唱</p>
                            </div>

                            <div style={style.controllerBtn}>
                                <idv style={{...style.controllerBtn.button, backgroundColor: "#0ebc0e"}} onTouchTap={() => {
                                    this.playController(PLAY_CONTROLLER_PAUSE_PLAY);
                                }}>
                                    <PlayIcon color="white"/>
                                    <div style={{color: 'white'}}>/
                                    </div>
                                    <StopIcon color="white"/>
                                </idv>
                                <p>播/暂</p>
                            </div>

                            <div style={style.controllerBtn}>
                                <div style={{...style.controllerBtn.button, backgroundColor: "#2cabe9"}} onTouchTap={() => {
                                    this.playController(PLAY_CONTROLLER_ORIGINAL_ACCOMPANY);
                                }}>
                                    <PersonIcon color="white"/>
                                    <div style={{color: 'white'}}>/
                                    </div>
                                    <MusicIcon color="white"/>
                                </div>
                                <p>原/伴</p>
                            </div>

                            <div style={{...style.controllerBtn}}>
                                <div style={{...style.controllerBtn.button, backgroundColor: "#ff5223"}}
                                    iconStyle={{width: 70, height: 70}} onTouchTap={() => {
                                    this.playController(PLAY_CONTROLLER_NEXT);
                                }}>
                                    <NextIcon color="white" style={{width: '1.5rem', height: '1.5rem'}}/>
                                </div>
                                <p>切歌</p>
                            </div>

                        </div>

                        <Paper style={style.extArea}>
                            <div style={{
                                width: '50%',
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                                <div
                                    style={style.extArea.btn}
                                    onTouchTap={() => {
                                        linkTo('controller/barrage', false, null);
                                    }}
                                >
                                    <img src={BarrageIcon} style={style.extArea.btn.icon}/>
                                    <p style={style.extArea.btn.label}>弹幕</p>
                                </div>
                            </div>
                            <div style={{
                                width: '50%',
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                                <div
                                    style={style.extArea.btn}
                                    onTouchTap={() => {
                                        linkTo('controller/effect', false, null);
                                    }}
                                >
                                    <img src={BarrageIcon} style={style.extArea.btn.icon}/>
                                    <p style={style.extArea.btn.label}>音效</p>
                                </div>
                            </div>
                        </Paper>

                    </Tab>
                    <Tab
                        buttonStyle={{
                            ...style.tabs.centerTab,
                            backgroundColor: backgroundColor[1],
                            color: fontColor[1]
                        }}
                        onActive={() => {
                            this.handelChangeTab(1);
                        }}
                        label="已点歌曲">
                        <div>
                            {
                                !this.state.emptyChooseSongs ? (
                                    <Paper style={style.chooseList}>
                                        <List>
                                            {
                                                playingSong ? (
                                                    <ListItem
                                                        key={playingSong.musicNo}
                                                        primaryText={playingSong.musicName}
                                                        secondaryText={playingSong.actorName}
                                                        rightToggle={<div><PlayingIcon/></div>}
                                                    />
                                                ) : ""
                                            }
                                            {playList.map((song) => (
                                                <ListItem
                                                    key={song.musicNo}
                                                    primaryText={song.musicName}
                                                    secondaryText={song.actorName}
                                                    rightToggle={
                                                        <div>
                                                            {
                                                                this.state.delChooseSongIdIng === song.musicNo ? <div style={style.chooseList.deleteButton.delIng}>
                                                                        <CircularProgress size={16} thickness={1}
                                                                                          style={{marginRight: 3}}/> 刪除中
                                                                    </div> : <div>
                                                                    <PublishIcon
                                                                        onTouchTap={() => {
                                                                            this.setTop(song.musicNo);
                                                                        }}
                                                                    />
                                                                    <DeleteIcon
                                                                        onTouchTap={() => {
                                                                            this.unChoose(song.musicNo);
                                                                        }}
                                                                    />
                                                                </div>
                                                            }

                                                        </div>
                                                    }
                                                />
                                            ))}
                                        </List>
                                    </Paper>
                                ) : (
                                    <Paper style={style.chooseList}>
                                        没有已点歌曲
                                    </Paper>
                                )
                            }
                        </div>
                    </Tab>

                    <Tab
                        onActive={() => {
                            this.handelChangeTab(2);
                        }}
                        buttonStyle={{...style.tabs.rightTab, backgroundColor: backgroundColor[2], color: fontColor[2]}}
                        label="最近唱过">
                        <div>
                            {
                                historySongList ? (
                                    <Paper className="history-song-list">
                                        <List className="song-list">
                                            {historySongList.map((song) => (
                                                <SongItem
                                                    key={song.id}
                                                    song={song}
                                                    onPushSongSuccess={this.onPushSongSuccess}
                                                />
                                            ))}
                                        </List>
                                    </Paper>
                                ) : (
                                    <Paper className="history-song-list">
                                        没有最近唱过歌曲
                                    </Paper>
                                )
                            }
                        </div>
                    </Tab>
                </Tabs>
                <MBottomNavigation selectedIndex={1}/>
            </div>
        );
    }

    updateSong() {
        const {data} = this.props.songs.chooseList || {data: {recordJson: '{"list":[],"playing":{}}'}};
        if (!data) {
            this.setState({
                emptyChooseSongs: true
            });
        } else {
            let {list, playing} = this.handelList(data.recordJson);
            if (typeof list === "string") list = JSON.parse(list);
            this.setState({
                playList: list,
                playingSong: playing
            });
        }
    }

    updateHistorySong() {
        const historyPlayList = this.props.songs.getHistorySongList;
        let historySongList;
        if (historyPlayList && historyPlayList.data) {
            let {list} = this.handelList(historyPlayList.data.recordJson);
            if (typeof list === "string") list = JSON.parse(list);
            historySongList = list.map((song) => {
                const actorIcon = song.actorIcon;
                const actorName = song.actorName;
                const actorNo = song.actorNo;
                const musicIcon = song.musicIcon;
                const musicName = song.musicName;
                const musicNo = song.musicNo;
                const vipStutas = song.vipStutas;
                return {
                    "nameNorm": musicName,
                    "id": musicNo,
                    "image": musicIcon,
                    "charge": vipStutas,
                    "serialNo": musicNo,
                    "actor": [
                        {
                            "actorNo": actorNo,
                            "nameNorm": actorName,
                        }
                    ]
                };
            });
        }
        this.setState({
            historySongList: historySongList
        });
    }

    handelList(jsonStr) {
        if (jsonStr) return JSON.parse(jsonStr);
        return {};
    }

    setTop(musicNo) {
        const param = {type: 12, id: musicNo};
        let playList = this.state.playList;
        const topSong = playList.find((song) => {
            if (song.musicNo === musicNo) return song;
        });
        const newSongList = playList.filter((song) => {
            if (song !== topSong) return song;
        });
        this.props.action_setSongTop(param, reqHeader(param), () => {
            this.setState({
                playList: [topSong, ...newSongList]
            });
        });
    }

    handelChangeTab(index) {
        this.setState({
            tabIndex: index
        });
    }

    onPushSongSuccess() {
        this.setState({
            updateChooseSongsCount: UPDATE_CHOOSE_SONG_TIME_COUNT
        });
    }

    unChoose(musicNo) {
        const param = {type: 13, id: musicNo};
        let playList = this.state.playList;
        this.setState({
            delChooseSongIdIng: musicNo
        });
        this.props.action_setSongTop(param, reqHeader(param), () => {
            this.setState({
                delChooseSongIdIng: 0,
                playList: playList.filter((song) => {
                    return song.musicNo !== musicNo;
                })
            });
        });
    }

    playController(type) {
        const param = {
            type: type
        };
        this.props.action_push(param, reqHeader(param), () => {
        }, (msg) => {
        });
    }

}

const mapStateToProps = (state, ownPorps) => {
    return {
        songs: state.app.songs
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        action_push: bindActionCreators(push, dispatch),
        action_setSongTop: bindActionCreators(setSongTop, dispatch),
        action_getChooseList: bindActionCreators(getChooseList, dispatch),
        action_getHistorySongList: bindActionCreators(getHistorySongList, dispatch)
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SongController));
