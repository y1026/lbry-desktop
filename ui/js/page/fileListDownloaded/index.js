import React from 'react'
import {
  connect
} from 'react-redux'
import {
  doFetchDownloadedContent,
} from 'actions/file_info'
import {
  selectDownloadedFileInfo,
  selectFetchingDownloadedContent,
} from 'selectors/file_info'
import {
  doNavigate,
} from 'actions/app'
import FileListDownloaded from './view'

const select = (state) => ({
  downloadedContent: selectDownloadedFileInfo(state),
  fetching: selectFetchingDownloadedContent(state),
})

const perform = (dispatch) => ({
  navigate: (path) => dispatch(doNavigate(path)),
  fetchFileListDownloaded: () => dispatch(doFetchDownloadedContent()),
})

export default connect(select, perform)(FileListDownloaded)
